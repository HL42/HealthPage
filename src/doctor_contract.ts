import { NearBindgen, near, call, view, UnorderedMap } from "near-sdk-js";

@NearBindgen({})
export class HealthAppContract {
  private doctorLogins: UnorderedMap<string, boolean>;
  private doctorAccessRequests: UnorderedMap<string, boolean>;
  private patientRecords: UnorderedMap<string, PatientRecord>;

  constructor() {
    this.doctorLogins = new UnorderedMap<string, boolean>("doctorLogins");
    this.doctorAccessRequests = new UnorderedMap<string, boolean>("doctorAccessRequests");
    this.patientRecords = new UnorderedMap<string, PatientRecord>("patientRecords");
  }

  @call({ payable: false })
  public async login(doctorId: string, password: string): Promise<void> {
    if (this.validateDoctor(doctorId, password)) {
      this.doctorLogins.set(doctorId, true);
    } else {
      throw new Error("Invalid doctor ID or password");
    }
  }

  @call({ payable: false })
  public async logout(doctorId: string): Promise<void> {
    this.doctorLogins.delete(doctorId);
  }

  @call({ payable: false })
  public async requestAccess(doctorId: string): Promise<void> {
    this.doctorAccessRequests.set(doctorId, true);
  }

  @call({ payable: false })
  public async grantAccess(doctorId: string): Promise<void> {
    this.doctorAccessRequests.delete(doctorId);
    this.doctorLogins.set(doctorId, true);
  }

  @call({ payable: false })
  public async addPatientRecord(patientId: string, record: PatientRecord): Promise<void> {
    this.patientRecords.set(patientId, record);
  }

  @call({ payable: false })
  public async editPatientRecord(patientId: string, record: PatientRecord): Promise<void> {
    if (this.doctorLogins.get(context.sender)) {
      this.patientRecords.set(patientId, record);
    } else {
      throw new Error("Only logged in doctors can edit patient records");
    }
  }

  @call({ payable: false })
  public async deletePatientRecord(patientId: string): Promise<void> {
    if (this.doctorLogins.get(context.sender)) {
      this.patientRecords.delete(patientId);
    } else {
      throw new Error("Only logged in doctors can delete patient records");
    }
  }

  @view({ payable: false })
  public async getPatientRecord(patientId: string): Promise<PatientRecord | null> {
    return this.patientRecords.get(patientId);
  }

  private validateDoctor(doctorId: string, password: string): boolean {
    // Implement doctor ID and password validation logic here
    return true; // Replace with actual validation logic
  }
}

class PatientRecord {
  public name: string;
  public medicalHistory: string;

  constructor(name: string, medicalHistory: string) {
    this.name = name;
    this.medicalHistory = medicalHistory;
  }
}