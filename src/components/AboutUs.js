import React, { useEffect, useRef } from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Favorite, People, EmojiObjects, Recycling, Public, Visibility } from '@mui/icons-material';

const AboutContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #FF0000 0%, #FF6B6B 100%)',
  overflow: 'hidden',
}));

const WhiteBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
  maxWidth: '90%',
}));

const AnimatedBox = motion(Box);

const FeatureBox = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  color: '#FF0000',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-5px)',
    boxShadow: '0 5px 15px rgba(255, 0, 0, 0.2)',
  },
}));

const MotivationalBox = styled(motion.div)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF0000, #FF6B6B)',
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  marginTop: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
}));

const FloatingIcon = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  fontSize: '2rem',
  color: 'rgba(255, 255, 255, 0.2)',
}));

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    { icon: <Favorite fontSize="large" />, label: "Personalized Donations", description: "AI algorithm connecting donors to aligned causes." },
    { icon: <People fontSize="large" />, label: "Engaged Community", description: "Virtual events and forums for donors and beneficiaries." },
    { icon: <EmojiObjects fontSize="large" />, label: "Social Innovation", description: "Blockchain for transparent donation tracking." },
    { icon: <Recycling fontSize="large" />, label: "Sustainability", description: "Recycling and upcycling program for donated items." },
    { icon: <Public fontSize="large" />, label: "Global Impact", description: "Partnerships with international NGOs to expand reach." },
    { icon: <Visibility fontSize="large" />, label: "Total Transparency", description: "Real-time reports and independent audits." },
  ];

  const floatingIcons = ['❤️', '🌍', '🤝', '💡', '🎁', '🌱'];

  return (
    <AboutContainer maxWidth={false}>
      <WhiteBox elevation={3}>
        <AnimatedBox 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: '#FF0000', textAlign: 'center', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              Revolutionizing Digital Solidarity
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#333333', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
              Give4Good is not just a donation platform; it's a movement for social transformation. We use cutting-edge technology to create an efficient and transparent solidarity ecosystem, where every action generates measurable and lasting impact.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedBox 
                  whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }} 
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureBox>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {feature.icon}
                    </motion.div>
                    <Typography variant="h6" sx={{ my: 2, color: '#FF0000' }}>{feature.label}</Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>{feature.description}</Typography>
                  </FeatureBox>
                </AnimatedBox>
              </Grid>
            ))}
          </Grid>

          <MotivationalBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 }
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {floatingIcons.map((icon, index) => (
              <FloatingIcon
                key={index}
                initial={{ x: `${Math.random() * 100}%`, y: '100%' }}
                animate={{
                  y: ['-100%', '100%'],
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  rotate: [0, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
              >
                {icon}
              </FloatingIcon>
            ))}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, position: 'relative', zIndex: 1 }}>
                "Together, we can create a world of endless possibilities."
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <Typography variant="h6" sx={{ position: 'relative', zIndex: 1 }}>
                Join us in making a difference, one act of kindness at a time.
              </Typography>
            </motion.div>
          </MotivationalBox>
        </AnimatedBox>
      </WhiteBox>
    </AboutContainer>
  );
};

export default AboutUs;
