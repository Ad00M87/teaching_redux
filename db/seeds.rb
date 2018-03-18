x = 0

10.times do
  x += 1
  user = User.create(
    name: Faker::BackToTheFuture.character,
    image: Faker::Avatar.image,
    email: "test#{x}@test.com",
    password: 'password'
  )
  5.times do
    Post.create(
    title: Faker::BackToTheFuture.date,
    body: Faker::BackToTheFuture.quote,
    user_id: user.id
    )
  end
end

puts "seeded"
