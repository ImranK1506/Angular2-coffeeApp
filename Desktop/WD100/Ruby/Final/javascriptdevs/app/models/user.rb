class User < ActiveRecord::Base
  has_many :jobs

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
