const a =  class Secret{
    static arr = ['neko','waifu','trap'];
    
    static SecretAPI(index){
        let category = this.arr[index]
        url = `https://api.waifu.pics/nsfw/${category}`
        console.log(`в данный момент выбрана категория: ${category}`)
    }
}
enval(a)
