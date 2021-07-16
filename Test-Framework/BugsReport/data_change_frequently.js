const BugsIssue = {
    Bug: {
      1: {
        Title: 'Test data values changes regularly',
        Type: 'Data issue',
        description: 'It is found that the api which ran successfully, may fail later since the response from the weather server changes',
        example: 'for lat= and "lon": "-85.6185" and "lat": "30.9821" the cuty name is changed'
      }
    },

    Issues: {
        1:{
            Title: 'The API token throws error in script',
            Type: 'Token issue',
            description: 'It is found that the api token which ran successfully in Swagger, may fail in script.',
            example: 'Try using any valid token after few hours of its creation. It will work in swagger but not in script'
          }
    }
}