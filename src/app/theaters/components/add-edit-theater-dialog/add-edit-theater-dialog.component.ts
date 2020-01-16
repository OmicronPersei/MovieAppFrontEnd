import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Theater} from '../../models/theater';
import {TheaterService} from '../../services/theater.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-theater-dialog',
  templateUrl: './add-edit-theater-dialog.component.html',
  styleUrls: ['./add-edit-theater-dialog.component.scss']
})
export class AddEditTheaterDialogComponent {
  DialogType = DialogType;
  private readonly theater: Theater = new Theater();

  loading = false;
  dialogType: DialogType = DialogType.Add;
  theaterFormGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    longitude: ['', Validators.required],
    latitude: ['', Validators.required]
  });

  private get name(): string {
    return (this.theaterFormGroup.get('name') as FormControl).value;
  }

  private set name(value: string) {
    (this.theaterFormGroup.get('name') as FormControl).setValue(value);
  }

  private get longitude(): number {
    return (this.theaterFormGroup.get('longitude') as FormControl).value;
  }

  private set longitude(value: number) {
    (this.theaterFormGroup.get('longitude') as FormControl).setValue(value);
  }

  private get latitude(): number {
    return (this.theaterFormGroup.get('latitude') as FormControl).value;
  }

  private set latitude(value: number) {
    (this.theaterFormGroup.get('latitude') as FormControl).setValue(value);
  }

  constructor(
    public dialogRef: MatDialogRef<AddEditTheaterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private theaterService: TheaterService,
    private snackBar: MatSnackBar
  ) {
    if (data && data.theater) {
      this.theater = data.theater;
      this.name = this.theater.name;
      this.longitude = this.theater.longitude;
      this.latitude = this.theater.latitude;
    }
    if (data && data.dialogType) {
      this.dialogType = data.dialogType;
    }
  }

  public submit(): void {
    if (this.theaterFormGroup.valid) {
      this.theater.name = this.name;
      this.theater.longitude = this.longitude;
      this.theater.latitude = this.latitude;
      if (this.dialogType === DialogType.Add) {
        this.addTheater();
      } else {
        this.editTheater();
      }
    }
  }

  private addTheater(): void {
    this.loading = true;
    this.theaterService.addTheater(this.theater)
      .subscribe(() => {
        this.loading = false;
        this.snackBar.open(`Added theater \"${this.theater.name}\" successfully!`, 'x');
        this.dialogRef.close();
      });
  }

  private editTheater(): void {
    this.loading = true;
    this.theaterService.updateTheater(this.theater)
      .subscribe(() => {
        this.loading = false;
        this.snackBar.open(`Edited theater \"${this.theater.name}\" successfully!`, 'x');
        this.dialogRef.close();
      });
  }
}

export enum DialogType {
  Add,
  Edit
}

