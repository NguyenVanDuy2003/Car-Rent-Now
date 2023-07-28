import { Box, FormLabel, Grid } from "@mui/material";
import Logo from "../../assets/images/logo/Logo.png";
import {
  FormContent,
  FormContent2,
  FormFooter,
  FormTitle,
} from "../../styles/styleFooter/styleComponents";
function Footer() {
  return (
    <>
      <FormFooter>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4} sm={3} md={4}>
                    <img src={Logo} alt="errorLogo" width="100%" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormContent>
                      Our vision is to provide convenience and help increase
                      your sales business.
                    </FormContent>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Grid container>
                  <FormTitle item xs={12}>
                    About
                  </FormTitle>
                  <FormContent item xs={12}>
                    How it works
                  </FormContent>
                  <FormContent item xs={12}>
                    Featured
                  </FormContent>
                  <FormContent item xs={12}>
                    Partnership
                  </FormContent>
                  <FormContent item xs={12}>
                    Bussiness Relation
                  </FormContent>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <FormTitle item xs={12}>
                    Community
                  </FormTitle>
                  <FormContent item xs={12}>
                    Events
                  </FormContent>
                  <FormContent item xs={12}>
                    Blog
                  </FormContent>
                  <FormContent item xs={12}>
                    Podcast
                  </FormContent>
                  <FormContent item xs={12}>
                    Invite a friend
                  </FormContent>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <FormTitle item xs={12}>
                    Socials
                  </FormTitle>
                  <FormContent item xs={12}>
                    Discord
                  </FormContent>
                  <FormContent item xs={12}>
                    Instagram
                  </FormContent>
                  <FormContent item xs={12}>
                    Twitter
                  </FormContent>
                  <FormContent item xs={12}>
                    Facebook
                  </FormContent>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr
              style={{
                width: "100%",
                border: "1px solid rgba(19, 19, 19, 0.16)",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={7} sm={6}>
                <Grid container>
                  <FormContent2 item xs={12}>
                    ©2022 MORENT. All rights reserved
                  </FormContent2>
                  <Grid item xs={6} sm={6}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} sm={6}>
                <Grid container>
                  <FormContent2 item xs={12} sm={6}>
                    Privacy & Policy
                  </FormContent2>
                  <FormContent2 item xs={12} sm={6}>
                    Terms & Condition
                  </FormContent2>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormFooter>
    </>
  );
}
export default Footer;
