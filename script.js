const a = class Secret {
    static arr = ['neko', 'waifu', 'trap'];
    static SecretAPI(index) {
        let category = this.arr[index];
        let ab = 'nsfw'
        url = `https://api.waifu.pics/${ab}/${category}`;
        console.log(`выбрана категория: ${category}`);
    }
}
eval(a)
