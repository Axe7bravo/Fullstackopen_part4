// utils/list_helper.js

const _ = require('lodash')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    return blogs.reduce((favorite, current) => {
        return current.likes > favorite.likes ? current : favorite
    })
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    const authors = _.countBy(blogs, 'author')
    const topAuthor = _.maxBy(Object.keys(authors), (author) => authors[author])

    return topAuthor ? { author: topAuthor, blogs: authors[topAuthor] } : null
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    const authorLikes = _(blogs)
        .groupBy('author')
        .map((objs, key) => ({
            author: key,
            likes: _.sumBy(objs, 'likes'),
        }))
        .maxBy('likes')

    return authorLikes || null
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
