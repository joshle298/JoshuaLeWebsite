import config from '../../../config.json';

const about = async (): Promise<string> => {
  return `                     

    ░░░░        ░░░░                
  ░░    ░░    ░░    ░░ 
    ░░██░░████░░██░░     
  ░░░░▒▒░░▒▒▒▒░░▒▒░░░░
  ▓▓░░░░▓▓░░░░▓▓░░░░▓▓  
  ▒▒░░░░██░░░░██░░░░▒▒
  ████    ▒▒▒▒    ████ 
  ░░                ░░    
    ░░            ░░ 
      ░░░░░░░░░░░░   
     
      
-----------
 ABOUT ME
 ${config.name}
 <u><a href="https://github.com/joshle298/JoshuaLeResume/blob/main/JoshuaLeResume.pdf" target="_blank">Resume</a></u>        
爵 I’m a third-year undergraduate at NYU studying Computer Science 
with a minor in Mathematics. I've held the title of Software 
Engineering Intern at Wayfair, Apple, and SendBlue (a startup).
Outside of school and work, I enjoy cooking new recipes,
playing ultimate frisbee, and I'm currently training for the
Ventura Marathon!
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
-----------
`;
};

export default about;
