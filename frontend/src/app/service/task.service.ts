import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = "http://localhost:3003/api/task/"
  private listTaskUrl = "http://localhost:3003/api/task/list/"
  private taskImageUploadUrl = "http://localhost:3003/api/task/upload/"

  constructor(private http:HttpClient) { }

  createTask(task){
    return this.http.post<any>(this.taskUrl, task)
  }

  createImageUpload(task){
    return this.http.post<any>(this.taskImageUploadUrl, task)
  }

  editTask(task){
    return this.http.put<any>(this.taskUrl,task)
  }

  getTasks(){
    return this.http.get<any>(this.listTaskUrl)
  }

  deleteTask(task){
    const _id = task._id
    const url = `${this.taskUrl}/${_id}`
    return this.http.delete<any>(url)
  }
}
