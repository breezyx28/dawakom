import {auth,userProfile} from '../http/auth.js';
import {SideNav} from '../common/sideNav.js';


auth.then(res => {


    if(res.accountType == 'pharmacy'){

        let pos = {
                position : {
                    "acounts" : false,
                    "bills" : true,
                    "user" : false,
                    "index" : true,
                    "usersDrop" :false,
                    "medicine" : true,
                    "profile" : true,
                    "requests" : false,
                    "setting" : false,
                    "supplier" : false,
                    }
        }       

        

        return SideNav(pos);

    }

    if(res.accountType == 'admin'){

        let pos = {
            
            position : {
                "acounts" : true,
                "bills" : true,

                "usersDrop" :true,

                "user" : true,
                "captain" : true,
                "pharmacy" : true,
                "agent" : true,

                "index" : true,
                "medicine" : true,
                "profile" : true,
                "requests" : true,
                "setting" : true,
                "supplier" : true,
                }
    }

    
        return SideNav(pos);

    }

});



