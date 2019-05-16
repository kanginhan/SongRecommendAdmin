// var BASE_URL = "https://songrecommendapi.azurewebsites.net/api";
var BASE_URL = "https://localhost:44350/api";

export default {
    test: {
        whoami: BASE_URL + "/values"
    },
    word:{
        addSongs: BASE_URL + "/word/addSongs",
        getListBaseSongs: BASE_URL + "/word/getListBaseSongs",
        getLyrics: BASE_URL + "/word/getLyrics",
        changePositive: BASE_URL + "/word/changePositive",
        analyzeLyrics: BASE_URL + "/word/analyzeLyrics",
        findPlayList: BASE_URL + "/word/findPlayList",
        localToAzureMigration: BASE_URL + "/word/localToAzureMigration",
        getListBaseWord: BASE_URL + "/word/getListBaseWord",
        calcWordsRate: BASE_URL + "/word/calcWordsRate",
        getListProposeSong: BASE_URL + "/word/getListProposeSong",
        calcSongsRate: BASE_URL + "/word/calcSongsRate",
        addSingSong: BASE_URL + "/word/addSingSong",
        baseSongToPropose: BASE_URL + "/word/baseSongToPropose",
        findChartList: BASE_URL + "/word/findChartList",
        findNewList: BASE_URL + "/word/findNewList",
        updateProposeSongs: BASE_URL + "/word/updateProposeSongs",
    },
}