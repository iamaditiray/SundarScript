import { AppBar, Toolbar, styled } from "@mui/material";
import SundarScriptLogo from "./SundarScriptLogo.png";

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 7.5vh;
`;

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img src={SundarScriptLogo} alt="SundarScript Logo" style={{transform: "scale(0.55)", marginLeft:"-50px"}}/>
      </Toolbar>
    </Container>
  );
};

export default Header;
