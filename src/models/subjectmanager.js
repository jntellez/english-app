import { Subject, BehaviorSubject } from 'rxjs'

export class SubjectManager {
    subject = new BehaviorSubject('charra')

    getSubject() {
        return this.subject.asObservable()
    }

    setSubject(value) {
        this.subject.next(value)
    }
}