

### Sequelize CLI Commands:

`node_modules/.bin/sequelize init`: 
This command will create the directories config, migrations, models, and seeders

`node_modules/.bin/sequelize model:generate --name Product --attributes name:string,price:number`:
This command will generate a model class.

`node_modules/.bin/sequelize db:migrate`:
This command will run the migration.

`node_modules/.bin/sequelize seed:generate --name seed-product`:
This command will create seeder script for model class.

`node_modules/.bin/sequelize db:seed:all`:
This command will run the seeder to populate the database with initial data.
