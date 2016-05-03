class SubscribersController < ApplicationController

  before_filter :authenticate_user!


  def new
  end

  def update
    #  token form javascript
    token = params[:stripeToken]

    # https://dashboard.stripe.com/test/plans
    customer = Stripe::Customer.create(
      card: token,
      plan: 1050,
      email: current_user.email
    )

    current_user.subscribed = true
    current_user.stripeid = customer.id
    current_user.save

    redirect_to root_path

  end
end
