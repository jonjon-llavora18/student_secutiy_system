class PagesController < ApplicationController
  def index
  end

  def get_api
    session[:id_number] = nil if params["seconds"].eql?("5")
    respond_to do |format|
      format.js {
        render json: StudentInformation.find_by_id(session[:id_number])
      }
    end
  end

  def reset_data
    session[:id_number] = nil
  end

  def verify_login
    data = StudentInformation.find_by_id(params[:id_number])
    StudentRecord.create!(description: "login", record_date: Date.current, student_information_id: data.id) if data.present?
    session[:id_number] = data.present? ? data.id : nil 

    redirect_to login_user_path
  end

end
