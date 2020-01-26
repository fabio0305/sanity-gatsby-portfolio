export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2d1f4fc666a277c22f66f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gd1g4nmk',
                  apiId: 'b511123c-fc57-4bdc-9d9e-8cec949205f3'
                },
                {
                  buildHookId: '5e2d1f4fdab7166cd5fb2ffa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-epsg3x2c',
                  apiId: '3a9854a3-63c8-440f-8441-91df93d56f98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fabio0305/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-epsg3x2c.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
