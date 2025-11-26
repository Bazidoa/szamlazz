import { Pipe, PipeTransform } from '@angular/core';
import { JobEnum } from '../../modules/user/models/job-type';

@Pipe({
  name: 'jobDisplay',
  standalone: true
})
export class JobDisplayPipe implements PipeTransform {

  private jobMap: Record<JobEnum, string> = {
    [JobEnum.HENTES]: 'Hentes',
    [JobEnum.PEK]: 'Pék',
    [JobEnum.KERTESZ]: 'Kertész'
  };

  transform(value: JobEnum | string | null | undefined): string {
    if (!value) return '';
    return this.jobMap[value as JobEnum] ?? value;
  }
}