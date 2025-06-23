// src/layouts/main/parallax-footer.js
import Box from '@mui/material/Box';

export default function ParallaxFooter() {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#222',
        color: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Top Row */}
      <Box
        sx={{
          height: '33.3%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '400px',
            height: '80px',
            bgcolor: '#f0f0f0',
            borderRadius: '3px',
          }}
        />
      </Box>

      {/* Center Row */}
      <Box
        sx={{
          height: '33.3%',
          width: '100%',
          bgcolor: '#262626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* Items */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                width: '80px',
                height: '80px',
                bgcolor: '#f0f0f0',
                borderRadius: '3px',
              }}
            />
          ))}
        </Box>

        {/* Circles */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              width: '100px',
              height: '100px',
              bgcolor: '#f0f0f0',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>

      {/* Bottom Row */}
      <Box
        sx={{
          height: '33.3%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '20px',
            width: '80%',
            bgcolor: '#f0f0f0',
            borderRadius: '3px',
          }}
        />
      </Box>
    </Box>
  );
}
