
import { ArrowOutward } from '@mui/icons-material';
import './P_Links.css';

function P_Links() {
    return (
        <div className="links-container">
            <h1 className="links-title gradient-text">Connect</h1>
            <div className="links-list">
                <div className="link-card" onClick={() => window.open("https://github.com/elyashiv67", "_blank")}>
                    <span>GitHub</span>
                    <ArrowOutward className="link-icon" />
                </div>
            </div>
        </div>
    );
}

export default P_Links;