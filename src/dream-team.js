import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
  if (members.length===0) {
    return false };
  let name=members.slice();
  let s=[];
  name.forEach((item) => {
    if (typeof item === 'string') {
      item=item.replace(/\s+/g,'');
      s.push(item[0].toUpperCase());
      
    }
  });
  s.sort();
  console.log(s);
  return s.join('');
  } else {return false }; 
}