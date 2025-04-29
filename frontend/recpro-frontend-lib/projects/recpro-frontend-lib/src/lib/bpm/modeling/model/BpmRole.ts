export class BpmRole {
  id: string | undefined = undefined;
  name: string = '';
  description: string = '';
  bpmsElementId: string = '';
  children: BpmRole[] = [];
}
