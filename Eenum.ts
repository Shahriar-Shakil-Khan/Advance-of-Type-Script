enum UserRoles {

   Admin = "Admin",
   Editor = "Editor",
   Viewer = "Viewer"
}

const canEdit = (role:UserRoles)=>{
    if( role === UserRoles.Admin || role === UserRoles.Editor ){
        return true;
    }else return false;
}
 
console.log(canEdit(UserRoles.Admin)); // true
console.log(canEdit(UserRoles.Viewer)); // false