import { context } from 'chattier';


loadpwbutton.onclick=async ()=> context.set_keys_from_password(localStorage.getItem('encryptedKey'), pwbox.value);

savepwbutton.onclick=async ()=> localStorage.setItem('encryptedKey', context.export_keys_with_password(pwbox.value));

console.log('starting');
