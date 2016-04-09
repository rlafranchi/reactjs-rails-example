# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Employee.create(name: 'Joe Doe', email: 'joe@doe.com', manager: false)
Employee.create(name: 'Jane Doe', email: 'jane@doe.com', manager: true)
Employee.create(name: 'Bob Dole', email: 'bob@dole.com', manager: false)
Employee.create(name: 'John Doe', email: 'john@doe.com', manager: true)
