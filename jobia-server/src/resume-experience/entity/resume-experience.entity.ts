import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeExperience{

    @PrimaryGeneratedColumn()
    expId: number

    @Column({nullable: true})
    expYear: number

    @Column({nullable: true})
    expCompanyName: String

    @Column({nullable: true})
    expDescription: String


    // resumeID foriegn key
    @ManyToOne(() => resume, (resFK) => resFK.expFK) // specify inverse side as a second parameter
    @JoinColumn()
    resFK: resume
}   