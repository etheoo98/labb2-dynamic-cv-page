import GitLogo from "../../img/svg/git.svg";
import GitHubLogo from "../../img/svg/github.svg";
import DotNetLogo from "../../img/svg/dotnet.svg";
import CSharpLogo from "../../img/svg/c-sharp.svg";
import VisualStudioLogo from "../../img/svg/visual-studio.svg";
import VisualStudioCodeLogo from "../../img/svg/visual-studio-code.svg";
import RiderLogo from "../../img/svg/rider.svg";
import DatagripLogo from "../../img/svg/datagrip.svg";
import PhpstormLogo from "../../img/svg/phpstorm.svg";
import SqlServerLogo from "../../img/svg/sql-server.svg";
import MySqlLogo from "../../img/svg/mysql.svg";
import PhpLogo from "../../img/svg/php.svg";
import ApacheLogo from "../../img/svg/apache.svg";
import WordpressLogo from "../../img/svg/wordpress.svg";
import HtmlLogo from "../../img/svg/html.svg";
import CssLogo from "../../img/svg/css.svg";
import BashLogo from "../../img/svg/bash.svg";
import LinuxLogo from "../../img/svg/linux.svg";

function StackSection() {
  return (
    <div className="section-container">
      <section className="section-content stack-content">
        <h2 className="section-header">Några av mina erfarenheter</h2>
        <div className="stack-container">
          <img className="stack-icon" src={GitLogo} alt="Git logotyp" />
          <img className="stack-icon" src={GitHubLogo} alt="GitHub logotyp" />
          <img className="stack-icon" src={DotNetLogo} alt="Dotnet logotyp" />
          <img className="stack-icon" src={CSharpLogo} alt="C-sharp logotyp" />
          <img
            className="stack-icon"
            src={VisualStudioLogo}
            alt="Visual Studio logotyp"
          />
          <img
            className="stack-icon"
            src={VisualStudioCodeLogo}
            alt="Visual Studio Code logotyp"
          />
          <img
            className="stack-icon"
            src={RiderLogo}
            alt="Jetbrains Rider logotyp"
          />
          <img
            className="stack-icon"
            src={DatagripLogo}
            alt="Jetbrains Datagrip logotyp"
          />
          <img
            className="stack-icon"
            src={PhpstormLogo}
            alt="Jetbrains PhpStorm logotyp"
          />
          <img
            className="stack-icon"
            src={SqlServerLogo}
            alt="SQL-Server logotyp"
          />
          <img className="stack-icon" src={MySqlLogo} alt="MySQL logotyp" />
          <img className="stack-icon" src={PhpLogo} alt="PHP logotyp" />
          <img className="stack-icon" src={ApacheLogo} alt="Apache logotyp" />
          <img
            className="stack-icon"
            src={WordpressLogo}
            alt="Wordpress logotyp"
          />
          <img className="stack-icon" src={HtmlLogo} alt="HTML logotyp" />
          <img className="stack-icon" src={CssLogo} alt="CSS logotyp" />
          <img className="stack-icon" src={BashLogo} alt="Bash logotyp" />
          <img className="stack-icon" src={LinuxLogo} alt="Linux logotyp" />
        </div>
      </section>
    </div>
  );
}

export default StackSection;
