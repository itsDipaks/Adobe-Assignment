

export const GetlocalStorageData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data;
    }catch(error){
        return null;
    }
}
