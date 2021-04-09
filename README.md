# Image Processing API

Stores images using the node filesystem and generates custom sizes for those images via GET request with the image dimensions passed in as a query string. This is a school project created from scratch. No starter code was given.

## Roadmap

- Add an endpoint to upload new images to the api to allow for resizing of user-submitted images.
- Convert image files to different formats (i.e. png to jpeg)

## Use Cases

This API could be used to save development time for applications that need the same image in multiple sizes by allowing developers to generate the specific size when they need in code. This also reduces the number of image files that need to be managed locally to just one per image.

## Technologies used
- NodeJS (Server technology of choice)
- Node filesystem module (Data persistence)
- Express (API development)
- Typescript (Reduce errors by requiring data be strongly typed)
- Jasmine / Supertest (Unit and Endpoint testing)
- Sharp (Image processing)
- Eslint (Linting)
- Prettier (Consistent code style formatting)
