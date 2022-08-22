import config from '../../../config.json';

const about = async (): Promise<string> => {
  return `                     


                                        -----------
                                        爵 ABOUT ME
        ░░░░        ░░░░                 ${config.name}
      ░░    ░░    ░░    ░░               <u><a href="/JoshuaLeResume.pdf" target="_blank">Resume</a></u>        
        ░░░░██░░██░░██░░                I’m a second-year undergraduate (with a junior standing)
      ░░░░░░▒▒░░▒▒░░▒▒░░░░              at NYU studying Computer Science with a double minor
      ▓▓░░░░▓▓░░░░▓▓░░░░▓▓              in Mathematics and Business Studies. I am currently an iOS Developer and Campus Leader for Apple. Outside of school and work,
      ▒▒░░░░██░░░░██░░░░▒▒              I enjoy playing chess against friends, playing ultimate frisbee, and programming small side projects.
      ████    ▒▒▒▒    ████              -----------
      ░░                ░░               CONTACT 
        ░░            ░░                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
          ░░░░░░░░░░░░                   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                                        -----------
`;
};

export default about;
