/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        _id:
 *          type: ObjectId
 *          description: The auto-generated id of the user
 *        username:
 *          type: string
 *          description: The username of the user
 *        discriminator:
 *          type: integer
 *          description: The random 4-digit number
 *        avatar:
 *          type: string
 *          description: The file hash of user's avatar
 *        email:
 *          type: string
 *          description: The email of the user
 *        password:
 *          type: string
 *          description: The password hash of the user
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The creation timestamp
 *        updatedAt:
 *          type: string
 *          format: date
 *          description: The modification timestamp
 *      example:
 *        username: Sevelar
 *        discriminator: 3113
 *        email: astron@example.com
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: API to manage users.
 */

/**
 * @swagger
 * path:
 *  /user/@me:
 *    get:
 *      summary: Get current user's summary
 *      tags: [User]
 *      responses:
 *        "200":
 *          description: Current User entry
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *
 */

// https://blog.logrocket.com/documenting-your-express-api-with-swagger/
