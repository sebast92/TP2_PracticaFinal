
class ModelMem {
    #champions

    constructor() {
        this.#champions = {"Aatrox":{"version":"15.13.1","id":"Aatrox","key":"266","name":"Aatrox","title":"the Darkin Blade","blurb":"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...","info":{"attack":8,"defense":4,"magic":3,"difficulty":4},"image":{"full":"Aatrox.png","sprite":"champion0.png","group":"champion","x":0,"y":0,"w":48,"h":48},"tags":["Fighter"],"partype":"Blood Well","stats":{"hp":650,"hpperlevel":114,"mp":0,"mpperlevel":0,"movespeed":345,"armor":38,"armorperlevel":4.8,"spellblock":32,"spellblockperlevel":2.05,"attackrange":175,"hpregen":3,"hpregenperlevel":0.5,"mpregen":0,"mpregenperlevel":0,"crit":0,"critperlevel":0,"attackdamage":60,"attackdamageperlevel":5,"attackspeedperlevel":2.5,"attackspeed":0.651}},"Ahri":{"version":"15.13.1","id":"Ahri","key":"103","name":"Ahri","title":"the Nine-Tailed Fox","blurb":"Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...","info":{"attack":3,"defense":4,"magic":8,"difficulty":5},"image":{"full":"Ahri.png","sprite":"champion0.png","group":"champion","x":48,"y":0,"w":48,"h":48},"tags":["Mage","Assassin"],"partype":"Mana","stats":{"hp":590,"hpperlevel":104,"mp":418,"mpperlevel":25,"movespeed":330,"armor":21,"armorperlevel":4.2,"spellblock":30,"spellblockperlevel":1.3,"attackrange":550,"hpregen":2.5,"hpregenperlevel":0.6,"mpregen":8,"mpregenperlevel":0.8,"crit":0,"critperlevel":0,"attackdamage":53,"attackdamageperlevel":3,"attackspeedperlevel":2.2,"attackspeed":0.668}},"Akali":{"version":"15.13.1","id":"Akali","key":"84","name":"Akali","title":"the Rogue Assassin","blurb":"Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...","info":{"attack":5,"defense":3,"magic":8,"difficulty":7},"image":{"full":"Akali.png","sprite":"champion0.png","group":"champion","x":96,"y":0,"w":48,"h":48},"tags":["Assassin"],"partype":"Energy","stats":{"hp":600,"hpperlevel":119,"mp":200,"mpperlevel":0,"movespeed":345,"armor":23,"armorperlevel":4.7,"spellblock":37,"spellblockperlevel":2.05,"attackrange":125,"hpregen":9,"hpregenperlevel":0.9,"mpregen":50,"mpregenperlevel":0,"crit":0,"critperlevel":0,"attackdamage":62,"attackdamageperlevel":3.3,"attackspeedperlevel":3.2,"attackspeed":0.625}}}
         //[
         //]
    }

    //obtenerProductos = async () => this.#productos

    obtenerChamp = async id => {
        this.#checkChampionsLength()
        // Pensar como cargar en memoria los champs desde los recursos de Riot Developers.
        const champ = this.#champions.find(p => p.name === id)
        return champ || {}
    }

    #checkChampionsLength = async () => {
        if (this.#champions.length == 0) {
            throw new Error("No more champs to select.")
        } else {
            return True
        }
    }

    obtenerNuevosChamps = async q => {
        champs = []
        for (let i = 0; i < q; i++) {
            const index = Math.floor(Math.random() * this.#champions.length)
            //Necesito pasar de index a champ name
            const champ_name = this.#champions[index]
            champs[i] = this.obtenerChamp(champ_name)
            //Tengo que sacar los seleccionados
            this.#champions.splice(index)
        }
        return champs
    }
}

export default ModelMem