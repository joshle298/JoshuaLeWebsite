// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'about' to learn about me.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Drafting an email to ${config.email}`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  return `Wow, really? No one uses Bing, I'll stop you right here.`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

export const ls = async (args: string[]): Promise<string> => {
  return `Nothing here, except my thoughts.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const somethingCool = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `I told you it would be something cool... `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████   █████          ████  ████                                      
  ░░███   ░░███          ░░███ ░░███                                      
   ░███    ░███   ██████  ░███  ░███   ██████                             
   ░███████████  ███░░███ ░███  ░███  ███░░███                            
   ░███░░░░░███ ░███████  ░███  ░███ ░███ ░███                            
   ░███    ░███ ░███░░░   ░███  ░███ ░███ ░███                            
   █████   █████░░██████  █████ █████░░██████   ██                        
  ░░░░░   ░░░░░  ░░░░░░  ░░░░░ ░░░░░  ░░░░░░   ██                         
                                              ░░                          
                                                                          
                                                                          
   █████  ██                          █████                  █████        
  ░░███  ███                         ░░███                  ░░███         
   ░███ ░░░  █████████████            ░███   ██████   █████  ░███████     
   ░███     ░░███░░███░░███           ░███  ███░░███ ███░░   ░███░░███    
   ░███      ░███ ░███ ░███           ░███ ░███ ░███░░█████  ░███ ░███    
   ░███      ░███ ░███ ░███     ███   ░███ ░███ ░███ ░░░░███ ░███ ░███    
   █████     █████░███ █████   ░░████████  ░░██████  ██████  ████ █████ ██
  ░░░░░     ░░░░░ ░░░ ░░░░░     ░░░░░░░░    ░░░░░░  ░░░░░░  ░░░░ ░░░░░ ░░ 
                                                                          

Type 'about' to learn about me.
Type 'help' to see the rest of the available commands (easter eggs are present).
`;
};
