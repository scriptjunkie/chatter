import { context } from 'chattier';


loadpwbutton.onclick=async ()=> context.set_keys_from_password(pwbox.value);

savepwbutton.onclick=async ()=> context.export_keys_with_password(pwbox.value);

console.log('starting');
