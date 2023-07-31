import axios from "axios";
const MEMBER_API_URL = "http://localhost:8080/api/v1/members";
class MemberService {
    saveMember(member) {
        return axios.post(MEMBER_API_URL, member);
    }
    getMembers() {
        return axios.get(MEMBER_API_URL);
    }
    deleteMember(id) {
        return axios.delete(MEMBER_API_URL+"/"+id);
    }
    getMember(id) {
        return axios.get(MEMBER_API_URL + '/' + id);
    }
    updateMember(id, member) {
        return axios.put(MEMBER_API_URL + "/" + id, member);
    }
    deleteTask(taskId) {
        return axios.delete(MEMBER_API_URL + `/task/${taskId}`);
    }
    editTask(taskId, updatedtask) {
        return axios.put(MEMBER_API_URL+`/task/${taskId}`, updatedtask);
    }
    addTask(id, task) {
        return axios.put(MEMBER_API_URL + `/task/add/${id}`, task);
    }
    getTask(id) {
        return axios.get(MEMBER_API_URL + `/task/${id}`);
    }

}   

export default new MemberService();