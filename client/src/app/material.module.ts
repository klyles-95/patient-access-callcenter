import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatCardModule, 
      MatCheckboxModule, 
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatOptionModule,
      MatSelectModule,
      MatDividerModule
    ],
    exports: [
      MatButtonModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatCardModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatOptionModule,
      MatSelectModule,
      MatDividerModule
    ],
  })
  export class MaterialModule { }