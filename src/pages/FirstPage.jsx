// src/pages/FirstPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../colors";

// Import your banner image (adjust path as needed)
// Make sure to add your banner image in the assets folder
import bannerImage from "../assets/homePage/banner1.jpg"; // You'll need to add this image
import DownloadPriceList from "../assets/Price-list-25.pdf";
import BrandsLogo from "../components/BrandsLogo";
import ShowProduct from "../components/ShowProduct";
import SpecialOffer from "../components/SpecialOffer";
import CustomerReviews from "../components/CustomerReviews";
import FirstPageContent from "../components/FirstPageContent";
import FAQComponent from "../components/FAQComponent";
import AboutVisionSection from "../components/AboutVisionSection";
import WhyChooseUs from "../components/WhyChooseUs";
import LocalSEOInfo from "../components/LocalSEOInfo";
import { Helmet } from "react-helmet-async";

export default function FirstPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sri Padmavathi Crackers",
    "url": "https://sripadmavathicrackers.com",
    "logo": "https://sripadmavathicrackers.com/logo.png"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Padmavathi Crackers",
    "image": "https://sripadmavathicrackers.com/store.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Annupankulam 14, 496/8, Kaliappa Nagar",
      "addressLocality": "Sivakasi",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626189",
      "addressCountry": "IN"
    },
    "telephone": "+91-9952561300"
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Helmet>
        <title>Sri Padmavathi Crackers | Best Sivakasi Crackers Online Store 2026</title>
        <meta name="description" content="Buy premium Sivakasi crackers online at best prices from Sri Padmavathi Crackers. Download 2026 price list, quick order, and enjoy safe doorstep delivery across India." />
        <meta name="keywords" content="Sivakasi Crackers Online, Best Crackers Shop in Sivakasi, Buy Crackers Online, Online Crackers Store, Diwali Crackers Online, Fancy Crackers, Kids Crackers, Wholesale Crackers, Festival Crackers, Fireworks Shop, Sivakasi Crackers Tamil Nadu, Crackers Shop Near Me, Online Crackers Delivery India" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      {/* Full Width Banner */}

      {/* Hero Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "90vh" },
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: colors.white,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: { xs: "1.8rem", md: "3.5rem" },
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 1,
                textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                color: colors.white,
              }}
            >
              Best Sivakasi Crackers Online Store
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: { xs: "1.3rem", md: "2.5rem" },
                fontWeight: 700,
                textTransform: "uppercase",
                color: colors.warningYellow,
                textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              – Sri Padmavathi Crackers
            </Box>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/home"
            sx={{
              bgcolor: colors.primaryRed,
              px: 4,
              py: 1.5,
              fontWeight: 800,
              fontSize: "1.1rem",
              "&:hover": { bgcolor: colors.darkRed },
            }}
          >
            ORDER ONLINE
          </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href={DownloadPriceList}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: colors.white,
                borderColor: colors.white,
                px: 4,
                py: 1.5,
                fontWeight: 800,
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", borderColor: colors.white },
              }}
            >
              VIEW PRICE LIST
            </Button>
          </Box>
        </Container>
      </Box>
      <FirstPageContent />
      <AboutVisionSection />
      <ShowProduct />
      <WhyChooseUs />
      <BrandsLogo />
      <SpecialOffer />
      <LocalSEOInfo />
      <CustomerReviews />
      <FAQComponent />
    </Box>
  );
}
