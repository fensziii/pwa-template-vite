export default function ({
    themes  = [ 'dark', 'light' ],
    accents = [ '#810CA8', '#38E54D', '#3AB0FF', '#F94C66', '#FFC54D' ]
} = {}) {
  
    const themer        = new Object();

    themer.userSystem   = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';



    themer.initTheme    = () => {
        if(localStorage.usertheme !== undefined && themes.includes(localStorage.usertheme)){
            document.documentElement.classList.add(localStorage.usertheme);
        } else {
            document.documentElement.classList.add(themer.userSystem);
        }
    };

    themer.setTheme     = (name = "dark") => {
        if(themes.includes(name)){
            localStorage.usertheme = name;
            document.documentElement.classList.length = 0;
            document.documentElement.classList.add(name);
        }
    };

    themer.setAccent    = (num = 0, color = "#810CA8") => {
        if(!accents.includes(color.toUpperCase())) return;
        if(document.getElementById('custom_accent') !== null) document.getElementById('custom_accent').remove();
        const userthemeCAD      = localStorage.userthemeCAD !== undefined ? JSON.parse(localStorage.userthemeCAD) : {
            0 : accents[0],
            1 : accents[1]
        };
        const accentCSS = [];
        for (const i in userthemeCAD) {
            if (Object.hasOwnProperty.call(userthemeCAD, i)) {
                if(num === i){
                    accentCSS.push(`---theme-accent-${i} : ${color} ;`);
                } else {
                    accentCSS.push(`---theme-accent-${i} : ${userthemeCAD[i]} ;`);
                }                
            }
        }
        const customAccent      = document.createElement('style');
        customAccent.id         = "custom_accent";
        customAccent.innerHTML  = `.custom_accent { ${accentCSS.join(' ')} }`;
        document.head.appendChild(customAccent);
    };

    return themer;
    
};