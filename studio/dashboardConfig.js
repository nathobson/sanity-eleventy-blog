export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5edbe6d8f7ef3af5faa7e3df',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-wef946mm',
                  apiId: '1b6f824f-73e1-401a-b4c8-1d7e3312aa4d'
                },
                {
                  buildHookId: '5edbe6d8f7ef3a3d94a7deff',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-48k1j7h5',
                  apiId: '1b3225c9-e3cc-47ec-861d-53ac2e51ddbe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-48k1j7h5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
