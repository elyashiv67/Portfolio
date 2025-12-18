import {Instagram , GitHub , LinkedIn} from '@mui/icons-material';
import './LinkPage.css';
import Link from "./Link/Link";

function LinkPage() {
    return (
        <div className="links-container">
            <h1 className="links-title gradient-text">Connect</h1>
            <div className="links-list">
                <Link name={"Git Hub"} path={"https://github.com/elyashiv67"} iconColor={"white"} iconComponent={<GitHub/>}/>
                <Link name={"Instagram"} path={"https://www.instagram.com/elyashiv_swisa"} iconColor={"white"} iconComponent={<Instagram/>}/>
                <Link name={"LinkedIn"} path={"https://www.linkedin.com/in/%D7%90%D7%9C%D7%99%D7%A9%D7%99%D7%91-%D7%A1%D7%95%D7%99%D7%A1%D7%94-b784002ba"} iconColor={"white"} iconComponent={<LinkedIn/>}/>
            </div>
        </div>
    );
}

export default LinkPage;