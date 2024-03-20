import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../lib/services/data.service';
import { Destination } from '../../lib/types/destination.type';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './destinations.component.html',
})
export class DestinationsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);

  destinationName: string = '';
  destinations: Destination[] = [];
  currentDestination: Destination | undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.destinationName = params.get('destinationName') || '';

      this.dataService.getDestinatios().subscribe((destinations) => {
        console.log(destinations);
        this.destinations = destinations;
        this.currentDestination = destinations.find(
          (destination) =>
            destination.name.toLowerCase() === this.destinationName
        );
      });
    });
  }
}
