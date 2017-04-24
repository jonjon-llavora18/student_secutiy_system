class PagesController < ApplicationController
  require 'net/http'
  require 'uri'
  def index
  end

  def get_api
    session[:id_number] = nil if params["seconds"].eql?("5")
    respond_to do |format|
      format.js {
        render json: check_id
      }
    end
  end

  def verify_login
    data = StudentInformation.find_by_id(params[:id_number])
    StudentRecord.create!(description: "login", record_date: Date.current, student_information_id: data.id, name: "#{data.first_name} #{data.last_name}", record_time: DateTime.current.strftime("%H:%M:%S")) if data.present?
    session[:id_number] = data.present? ? data.id : "error"
    if data.present?
      session[:id_number] = data.id
      send_sms(data, "check-in")
    else
      session[:id_number] = "error"
    end

    redirect_to login_user_path
  end

  def verify_logout
    data = StudentInformation.find_by_id(params[:id_number])
    StudentRecord.create!(description: "logout", record_date: Date.current, student_information_id: data.id, name: "#{data.first_name} #{data.last_name}", record_time: DateTime.current.strftime("%H:%M:%S")) if data.present?
    session[:id_number] = data.present? ? data.id : "error"
    if data.present?
      session[:id_number] = data.id
      send_sms(data, "check-out")
    else
      session[:id_number] = "error"
    end

    redirect_to logout_user_path
  end

  private

  def check_id
    return "empty" if session[:id_number].nil?
    StudentInformation.find_by_id(session[:id_number])
  end

  def send_sms(data, description)
    uri = URI.parse("https://www.isms.com.my/isms_send.php")
    Net::HTTP.post_form(uri, {
      :un => 'emmanr',
      :pwd => '123qwe123qweRR',
      :dstno => data.guardian_contacts,
      :msg => "#{data.first_name} #{data.last_name}, has #{description} to the school",
      :type => '1',
    })
  end
end
