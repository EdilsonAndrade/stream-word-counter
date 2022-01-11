


<h3 align="center">
  Word Counter
</h3>
<h4 align="center"><strong>Setup Steps and Dependencies</strong></h4>

1. Clone this project
2. In the root folder , type ```yarn```
3. Create the .env file and follow the example in the .env.example setting a PORT variable
4. run the following command for a test
5. ```yarn test```

<h3>IMPORTANT - create the env file as mentioned in item 3</h3>

<h4 align="center"><strong>If you have docker installed go to the session 2</strong></h4>

<h4 align="left"><strong>Session 1 -running out of the container</strong></h4>


5. To run the service run ``` yarn dev:server```
6. Access the following URL to access the server ```http://localhost:<PORT DEFINED IN THE ENV FILE>/api/v1/api-docs/#/default/post_api_v1_wordcount```
7. Example - ```http://localhost:3333/api/v1/api-docs/#/default/post_api_v1_wordcount```

<h4 align="left"><strong>Session 2 - docker</strong></h4>

First run the following command

```
docker run -it --rm -v $PWD:$PWD --user  $UID:$UID --workdir $PWD node yarn
```

Second run this command
<h4>Remember to put the port in the cmmand as you set in the env file above</h4>

```
docker run -it --rm -v $PWD:$PWD --user $UID:$UID --workdir $PWD -p 3333:3333 node yarn dev:server
```
