
# Student

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/student | `GET` | Empty | List all Student. |
| /api/student | `POST` | {"firstName":"Hüseyin","lastName":"Özge","schoolNo":5024,"gender":"1","age":18,"telephone":"054538848844"} | Create a new Student. |
| /api/student/:id | `DELETE` | Empty | Delete a Student. |

# Lesson

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/lesson | `GET` | Empty | List all Lesson. |
| /api/lesson | `POST` | {"lessonName":"Almanca"} | Create a new Lesson. |
| /api/lesson/:id | `DELETE` | Empty | Delete a Lesson. |

# Homework

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/homework | `GET` | Empty | List all homework. |
| /api/homework | `POST` | {"student_id":"63d10c1bb9c67132c067312e","lesson_id":"63cec42e60e9083318079b83","issue":"örnek konu"} | Create a new Homework. |
| /api/homework/:id | `DELETE` | Empty | Delete a Lesson. |

