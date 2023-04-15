import { useContext } from "react";
import Editor from "./Editor";
import {Box, styled} from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container=styled(Box)`
    display:flex;
    background-color: #060606;
    height: 49.5vh;
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
    return(
        <Container>
        <Editor
            language="xml"
            heading="HTML"
            value={html}
            onChange={setHtml}
            icon='/'
            />
        <Editor
            heading="CSS"
            icon="※"
            language="css"
            value={css}
            onChange={setCss}
            />
        <Editor
            language="javascript"
            heading="JS"
            value={js}
            onChange={setJs}
            icon="{/}"
            />
        </Container>
    )
}

export default Code;