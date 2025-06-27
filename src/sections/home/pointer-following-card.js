import { useRef, useState, useEffect } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import './scss/pointer-following-card.scss';
import Image from 'src/components/image';

const projects = [
  { id: 0, name: 'Dyal Thak', handle: 'dyal_thak', height: 160, width: 160 },
  { id: 1, name: 'Leidinger Matthias', handle: 'leidinger_matthias', height: 282, width: 271 },
  { id: 2, name: 'Mark Rammers', handle: 'mark_rammers', height: 160, width: 160 },
  { id: 3, name: 'Mark Rammers', handle: 'mark_rammers', height: 126, width: 126 },
  { id: 4, name: 'Mark Rammers', handle: 'mark_rammers', height: 224, width: 271 },
];

export default function PointerFollowingCard() {
  const containerRef = useRef(null);
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isMouseInContainer, setIsMouseInContainer] = useState(false);

  const handleContainerMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setGlobalMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleContainerMouseEnter = () => {
    setIsMouseInContainer(true);
  };

  const handleContainerMouseLeave = () => {
    setIsMouseInContainer(false);
    setActiveCardIndex(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
      className="pointer-cardContainer"
      style={{ cursor: activeCardIndex !== null ? 'none' : 'pointer' }}
    >
      <div className="first-card-main">
        {projects.slice(0, 3).map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={project.id}
            globalMousePos={globalMousePos}
            containerRef={containerRef}
            isActive={activeCardIndex === project.id}
            setActiveCard={setActiveCardIndex}
            isMouseInContainer={isMouseInContainer}
          />
        ))}
      </div>
      <Stack flexDirection="column" justifyContent="center" alignItems="center" mt={8}>
        <Stack flexDirection="column" justifyContent="center" textAlign="center" maxWidth={700}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: '#a3a3a3' }}>
            Partners
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            Design. Dev. Depart.
          </Typography>
        </Stack>
        <Stack
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          maxWidth={450}
          mt={2}
        >
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            We establish deep relations that keep adding value even when the project has finished.
          </Typography>
        </Stack>
      </Stack>
      <Box className="first-card-main" sx={{ mt: 10 }}>
        {projects.slice(3, 5).map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={project.id}
            globalMousePos={globalMousePos}
            containerRef={containerRef}
            isActive={activeCardIndex === project.id}
            setActiveCard={setActiveCardIndex}
            isMouseInContainer={isMouseInContainer}
          />
        ))}
      </Box>
    </div>
  );
}

function Card({
  project,
  index,
  globalMousePos,
  containerRef,
  isActive,
  setActiveCard,
  isMouseInContainer,
}) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });

  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  const initialCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();

      initialCenter.current = {
        x: cardRect.left + cardRect.width / 2 - containerRect.left,
        y: cardRect.top + cardRect.height / 2 - containerRect.top,
      };
    }
  }, []); // Only run once on mount

  useEffect(() => {
    if (!isActive || !containerRef.current || !cardRef.current || !isMouseInContainer) {
      x.set(0);
      y.set(0);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();

    // Get static initial card center
    const cardCenterX = initialCenter.current.x;
    const cardCenterY = initialCenter.current.y;

    const mouseX = globalMousePos.x;
    const mouseY = globalMousePos.y;

    // Offset from static center to mouse
    let offsetX = mouseX - cardCenterX;
    let offsetY = mouseY - cardCenterY;

    // Clamp movement to prevent exiting container
    const cardSize = project.height;
    const padding = 20;

    const minX = -(cardCenterX - cardSize / 2 - padding);
    const maxX = containerRect.width - cardCenterX - cardSize / 2 - padding;

    const minY = -(cardCenterY - cardSize / 2 - padding);
    const maxY = containerRect.height - cardCenterY - cardSize / 2 - padding;

    offsetX = Math.max(minX, Math.min(maxX, offsetX));
    offsetY = Math.max(minY, Math.min(maxY, offsetY));

    x.set(offsetX);
    y.set(offsetY);
  }, [globalMousePos, isActive, x, y, isMouseInContainer]);

  const handleCardClick = () => {
    if (isActive) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  const handleCardMouseEnter = () => {
    if (!isActive) {
      requestAnimationFrame(() => {
        setActiveCard(index);
      });
      // setActiveCard(index);
    }
  };

  return (
    <m.div
      ref={cardRef}
      style={{
        width: project.width,
        height: project.height,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative', // Changed from absolute to relative
        x: isActive ? springX : 0,
        y: isActive ? springY : 0,
        zIndex: isActive ? 999 : 1,
        pointerEvents: isActive ? 'none' : 'auto',
        opacity: isActive ? 1 : 1,
      }}
      onMouseEnter={handleCardMouseEnter}
      // onClick={handleCardClick}
      className="card"
    >
      <div
        className="cardInner"
        style={{
          backgroundImage: `linear-gradient(135deg,
            ${
              index === 0
                ? '#667eea, #764ba2'
                : index === 1
                  ? '#f093fb, #f5576c'
                  : '#4facfe, #00f2fe'
            })`,
        }}
      >
        <Image
          src={`/assets/images/blog/Article_Image.png`}
          alt="Image 5"
          fill
          sx={{
            height: '100%',
            width: '100%',

            objectFit: 'cover',
          }}
        />
        {/* Active indicator */}
        {isActive && <div className="indicator"></div>}

        {/* <div className="text">
          <div className="font-bold">{project.name}</div>
          <div className="handle">@{project.handle}</div>
          {isActive && <div className="status">Following...</div>}
        </div> */}
      </div>
    </m.div>
  );
}
