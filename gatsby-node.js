const { default: axios } = require("axios")
const slugify = require('slugify')

exports.createPages = async function ({ actions, graphql }) {

    const {data} = await axios.get('http://localhost:1337/api/products?populate=*')

    data.data.forEach(element => {
     
      actions.createPage({
        path:`product${element.id}`,
        component:require.resolve('./src/templates/productItem.tsx'),
        context:element
      })
    });

    // console.log("data",data.data[0].attributes)

    // data.allMarkdownRemark.edges.forEach(edge => {
    //   const slug = edge.node.fields.slug
    //   actions.createPage({
    //     path: slug,
    //     component: require.resolve(`./src/templates/productItem.tsx`),
    //     context: { slug: slug },
    //   })
    // })
  }