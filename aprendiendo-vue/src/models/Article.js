class Article{
    constructor(title, content, date, image){
        this.title = title;
        this.content = content;
        this.date = null;
        this.image = image;
    }
}

export default Article;
/*
title: String,
content: String,
date: { type: Date, default: Date.now },
image: String
*/