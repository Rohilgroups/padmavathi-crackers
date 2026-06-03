import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { colors } from "../colors";

const LocalSEOInfo = () => {
  return (
    <Box sx={{ py: 6, bgcolor: colors.lightBlueGray }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: "bold", color: colors.primaryRed, mb: 4 }}
        >
          Visit Our Store
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <LocationOnIcon sx={{ color: colors.primaryRed, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">Store Address</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Sri Padmavathi Crackers<br />
                    Annupankulam 14, 496/8, Kaliappa Nagar<br />
                    , Sivakasi, Tamil Nadu 626189, India
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <PhoneIcon sx={{ color: colors.primaryRed, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">Contact Numbers</Typography>
                  <Typography variant="body1" color="text.secondary">
                    +91  99525 61300<br />
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                <AccessTimeIcon sx={{ color: colors.primaryRed, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">Working Hours</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Monday - Sunday: 9:00 AM - 9:00 PM<br />
                    Open on all festival days
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/918838702381"
                target="_blank"
                sx={{
                  bgcolor: "#25D366",
                  "&:hover": { bgcolor: "#128C7E" },
                  fontWeight: "bold",
                  px: 3,
                  py: 1
                }}
              >
                Chat on WhatsApp
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: "100%", minHeight: "350px", overflow: "hidden", borderRadius: 2 }}>
              <iframe
                title="Sri Padmavathi Crackers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.046342898716!2d77.78453483984183!3d9.453715011684347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43b812fcf%3A0x8e8334812a64016b!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707923485746!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocalSEOInfo;
