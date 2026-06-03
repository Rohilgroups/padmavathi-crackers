// src/pages/AboutPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { colors } from "../colors";

import { Helmet } from 'react-helmet-async';

// Component imports
import AboutText from "../components/AboutText";
import WhyChooseUs from "../components/WhyChooseUs";
import SafetyTips from "../components/SafetyTips";
import LocalSEOInfo from "../components/LocalSEOInfo";

// Banner image (make sure this file exists in src/assets/banner/)
import bannerImage from "../assets/banner/aboutPage.jpg";

export default function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sri Padmavathi Crackers",
    "url": "https://sripadmavathicrackers.com",
    "logo": "https://sripadmavathicrackers.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9952561300", 
      "contactType": "customer service"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Padmavathi Crackers",
    "image": "https://sripadmavathicrackers.com/store.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sivakasi",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sripadmavathicrackers.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Sri Padmavathi Crackers",
        "item": "https://sripadmavathicrackers.com/about"
      }
    ]
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Helmet>
        <title>About Sri Padmavathi Crackers | Trusted Sivakasi Crackers Shop</title>
        <meta name="description" content="Learn about Sri Padmavathi Crackers, a trusted Sivakasi crackers shop offering quality fireworks, affordable pricing, and online cracker delivery across India." />
        <meta name="keywords" content="About Sri Padmavathi Crackers, Sivakasi Crackers Shop, Buy Crackers Online, Online Fireworks Store, Quality Crackers, Festival Fireworks, Diwali Crackers, Fancy Crackers Online, Crackers Delivery India, Sivakasi Fireworks Shop, Tamil Nadu Crackers Store, Best Crackers Shop in Sivakasi" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "280px", sm: "320px", md: "420px", lg: "480px" },
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Dark overlay with slight gradient for better text readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
            zIndex: 1,
          }}
        />

        {/* Content on top */}
        <Box sx={{ position: "relative", zIndex: 2, px: 3 }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              letterSpacing: "-0.5px",
            }}
          >
            About Sri Padmavathi Crackers
          </Typography>

          <Breadcrumbs
            separator="›"
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "inherit",
              "& .MuiBreadcrumbs-separator": { color: "inherit" },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ fontWeight: 500 }}
            >
              Home
            </Link>
            <Typography color="inherit">About</Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      {/* Main Content Sections */}
      <Box component="main">
        <AboutText />
        <WhyChooseUs />
        <Box sx={{ py: 6, px: 2, textAlign: "center", bgcolor: "#f9f9f9" }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", color: colors.primaryRed }}>
            Ready to Light Up Your Celebration?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary", maxWidth: 600, mx: "auto" }}>
            Explore our latest collections, read safety tips on our blog, or get in touch with our support team.
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ bgcolor: colors.primaryRed, color: "#fff", "&:hover": { bgcolor: colors.darkRed } }} href="/new-arrivals">
              New Arrivals
            </Button>
            <Button variant="outlined" sx={{ borderColor: colors.primaryRed, color: colors.primaryRed, "&:hover": { borderColor: colors.darkRed, color: colors.darkRed } }} href="/contact">
              Contact Us
            </Button>
            <Button variant="outlined" sx={{ borderColor: colors.primaryRed, color: colors.primaryRed, "&:hover": { borderColor: colors.darkRed, color: colors.darkRed } }} href="/blogs">
              Read Our Blog
            </Button>
          </Box>
        </Box>
        <LocalSEOInfo />
        <SafetyTips />
      </Box>
    </Box>
  );
}
