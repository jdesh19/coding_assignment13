Install dependencies
prettier, eslint and husky

Configure eslintrc.json and .prettierrc files.

Update package.json to include a husky pre-commit hook that check prettier and eslint and run tests

Configure Dockerfile to run a production build on specified port.

To build the web application use:
`docker build -t desharnais_jaron_coding_assignment_13 .`

To get run the web application running use

`docker run -p 8018:8018 desharnais_jaron_coding_assignment_13:latest`

This will ensure the application gets ran on port 8018
